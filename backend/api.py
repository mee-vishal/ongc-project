from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
import pickle

app = FastAPI(title="ONGC ROP Prediction API")

# Load model
with open("rf_model_depth_global.pkl", "rb") as f:
    model = pickle.load(f)

class ROPInput(BaseModel):
    Depth: float
    WOB: float
    RPM: float
    Flow: float

# CORS - allow your deployed frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://ongc-rop.netlify.app",
         # <--- your Netlify frontend URL
    ],
    allow_credentials=True,
    allow_methods=["*"],  # allow GET, POST, OPTIONS, etc.
    allow_headers=["*"],
)

@app.post("/predict")
def predict(data: ROPInput):
    # EXACT column names used during training
    df = pd.DataFrame([{
        "Depth": data.Depth,
        "WOB": data.WOB,
        "RPM": data.RPM,
        "Flow": data.Flow,
    }])

    prediction = model.predict(df)[0]
    return {"predicted_rop": float(prediction)}
