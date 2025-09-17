# action-test


# Experiment & Loan Provider ER Diagram

```mermaid
erDiagram
    EXPERIMENT {
        int id PK
        string name
        decimal disbursement_limit
    }

    LOAN_PROVIDER {
        string id PK
        string name
    }

    EXPERIMENT_LOAN_PROVIDER {
        int experiment_id FK
        string loan_provider_id FK
    }

    EXPERIMENT ||--o{ EXPERIMENT_LOAN_PROVIDER : has
    LOAN_PROVIDER ||--o{ EXPERIMENT_LOAN_PROVIDER : supports
