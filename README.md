# Experiment, Loan Provider & Loan ER Diagram

```mermaid
erDiagram
    EXPERIMENT {
        uuid id PK
        string name
        decimal disbursement_limit
    }

    LOAN_PROVIDER {
        uuid id PK
         . other_fields .
    }

    EXPERIMENT_LOAN_PROVIDER {
        uuid experiment_id FK
        uuid loan_provider_id FK
    }

    LOAN {
        uuid id PK
        uuid experiment_id FK
        . other_fields .
    }

    EXPERIMENT ||--o{ EXPERIMENT_LOAN_PROVIDER : has
    LOAN_PROVIDER ||--o{ EXPERIMENT_LOAN_PROVIDER : supports
    EXPERIMENT ||--o{ LOAN : applied_in
