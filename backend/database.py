from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base


# Read the database connection string from the environment.
DATABASE_URL = "postgresql://neondb_owner:npg_qLkl8hJQnOS9@ep-shy-frog-amvzzdz8-pooler.c-5.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"

# Create the SQLAlchemy engine used by the application.
engine = create_engine(DATABASE_URL)

# Factory for creating database sessions.
SessionLocal = sessionmaker(bind=engine)

# Base class for ORM models.
Base = declarative_base()