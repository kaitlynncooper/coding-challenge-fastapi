# Solvent ASA Difference Calculator

This product calculates the difference in solvent accesible surface area (ASA) before and after interactions with other molecules. 

Data is extracted from the [RCSB PDB API](https://data.rcsb.org/redoc/index.html#tag/Interface-Service ) given user-provided search 
paramters: `entry_id`, `assembly_id`, and `interface_id`. Computed values for bound ASA, unbound ASA, and ASA difference are displayed 
in a table for each interaction partner, with each row representing a single residue in the interaction interface. 

## Dependencies
* React.js
* npm
* fastapi
* uvicorn
* httpx
  
## Running Locally

**Starting the fastAPI backend**

In a new terminal:
```
cd backend
python main.py
```

**Starting the React.js frontend**

In a new terminal:
```
cd frontend
npm start
```
