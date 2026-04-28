"""Backend API tests for Note În Demisol landing page."""
import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://note-landing.preview.emergentagent.com').rstrip('/')
API = f"{BASE_URL}/api"


@pytest.fixture
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# --- Health ---
class TestHealth:
    def test_root(self, client):
        r = client.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert data.get("status") == "ok"
        assert "Note" in data.get("message", "")


# --- Lessons signup ---
class TestLessonsSignup:
    def test_signup_valid_incepator(self, client):
        payload = {
            "full_name": "TEST Ion Popescu",
            "email": "test_ion@example.com",
            "phone": "0712345678",
            "experience": "incepator",
            "message": "Vreau sa invat chitara"
        }
        r = client.post(f"{API}/lessons/signup", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "id" in data and isinstance(data["id"], str)
        assert data["full_name"] == payload["full_name"]
        assert data["email"] == payload["email"]
        assert data["experience"] == "incepator"
        assert "_id" not in data

    def test_signup_valid_mediu(self, client):
        r = client.post(f"{API}/lessons/signup", json={
            "full_name": "TEST Maria M",
            "email": "test_maria@example.com",
            "phone": "0712345679",
            "experience": "mediu",
            "message": ""
        })
        assert r.status_code == 200, r.text
        assert r.json()["experience"] == "mediu"

    def test_signup_valid_avansat(self, client):
        r = client.post(f"{API}/lessons/signup", json={
            "full_name": "TEST Andrei A",
            "email": "test_andrei@example.com",
            "phone": "0712345680",
            "experience": "avansat",
            "message": "Cant deja"
        })
        assert r.status_code == 200, r.text
        assert r.json()["experience"] == "avansat"

    def test_signup_invalid_experience(self, client):
        r = client.post(f"{API}/lessons/signup", json={
            "full_name": "TEST Bad",
            "email": "test_bad@example.com",
            "phone": "0712345681",
            "experience": "expert",
            "message": ""
        })
        assert r.status_code == 400, r.text

    def test_signup_invalid_email(self, client):
        r = client.post(f"{API}/lessons/signup", json={
            "full_name": "TEST Bad Email",
            "email": "not-an-email",
            "phone": "0712345682",
            "experience": "incepator",
            "message": ""
        })
        assert r.status_code == 422, r.text

    def test_signup_list_no_objectid_leak(self, client):
        r = client.get(f"{API}/lessons/signup")
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        assert len(items) > 0
        for it in items:
            assert "_id" not in it
            assert "id" in it
            assert "email" in it


# --- Contact ---
class TestContact:
    def test_contact_valid(self, client):
        payload = {
            "name": "TEST Contact",
            "email": "test_contact@example.com",
            "subject": "Salut",
            "message": "Mesaj de test"
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "id" in data
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["subject"] == payload["subject"]
        assert "_id" not in data

    def test_contact_invalid_email(self, client):
        r = client.post(f"{API}/contact", json={
            "name": "TEST Bad",
            "email": "bad-email",
            "subject": "Hello",
            "message": "msg"
        })
        assert r.status_code == 422, r.text

    def test_contact_list_no_objectid_leak(self, client):
        r = client.get(f"{API}/contact")
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        assert len(items) > 0
        for it in items:
            assert "_id" not in it
            assert "id" in it
