# action-test


erDiagram
• EXPERIMENT { int id PK
string name
decimal disbursement_limit
• LOAN_PROVIDER { string id PK
string name
EXPERIMENT_LOAN_PROVIDER {
int experiment_id FK
string loan_provider_id FK
EXPERIMENT 1|--of EXPERIMENT_LOAN_PROVIDER : "™
LOAN PROVIDER 1|--o{ EXPERIMENT_LOAN_PROVIDER : "
%% Example data mapping
LOAN_PROVIDER : TCL1
LOAN_PROVIDER: TCL3_Reserve
LOAN_ PROVIDER : TCL3_Recycle
EXPERIMENT : zero_interest
EXPERIMENT : basic
EXPERIMENT : no_experiment
%% TCL1 →> zero_interest
,TCL1 Jo--|| zero_interest : supports
%% TCL3 Reserve -> no_experiment, basic
TCL3_Reserve to--ll no_experiment : supports
•TCL3_Reserve Fo--11 basic : supports
%% TCL3 Recycle -> no_experiment
TCL3_Recycle Jo--|| no_experiment : supports
