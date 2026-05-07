from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base


# Read the database connection string from the environment.
DATABASE_URL = ""

# Create the SQLAlchemy engine used by the application.
engine = create_engine(DATABASE_URL)

# Factory for creating database sessions.
SessionLocal = sessionmaker(bind=engine)

# Base class for ORM models.
Base = declarative_base()