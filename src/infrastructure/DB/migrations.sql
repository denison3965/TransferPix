DROP SCHEMA IF EXISTS public cascade;
CREATE SCHEMA public;

CREATE TABLE public.pix_keys (
    id UUID PRIMARY KEY,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    key_value VARCHAR(255) NOT NULL,
    kind VARCHAR(20) NOT NULL,
    account_id UUID NOT NULL
);

CREATE TABLE public.banks (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    code VARCHAR(20) NOT NULL,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE public.accounts (
    id UUID PRIMARY KEY,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    owner_name VARCHAR(255) NOT NULL,
    bank_id UUID NOT NULL,
    number VARCHAR(20) NOT NULL
);