from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import httpx


app = FastAPI()

origins = [
    "http://localhost:3001/",
    "localhost:3001"
]


# TODO - currently allowing all origins, may need to restrict further for security
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/")
async def read_root() -> dict:
    return {"message": "Welcome"}

# Accepts post request from frontend user form and sends 
# get request to RCSB API to extract Surface ASA data
@app.post("/asa-change")
async def calculate_asa_change(entry_id: str, assembly_id: str, interface_id: str): 
    res = httpx.get(f'https://data.rcsb.org/rest/v1/core/interface/{entry_id}/{assembly_id}/{interface_id}')
    return res.json()