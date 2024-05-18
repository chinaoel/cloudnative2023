import requests
def test_create_user():
    # Specify the base URL of the API
    base_url = "http://127.0.0.1:5000"
    
    # The user ID to query for
    body = {"user_id":13411351514,
            "name":"John Doe",
            "email":"johndoe.example.com",
            "cellphone_number":1234567890,
            "plate":"A12356"}


    # The expected response

    # Make a GET request to the API
    response = requests.post(f"{base_url}/create_user",json=body)
    assert response.status_code == 200

def test_get_user_info():
    # Specify the base URL of the API
    base_url = "http://127.0.0.1:5000"
    
    # The user ID to query for
    user_id = 13411351514,



    # The expected response

    # Make a GET request to the API
    response = requests.get(f"{base_url}/get_user_info?user_id={user_id}")
    assert response.status_code == 200


def test_delete_user():
    # Specify the base URL of the API
    base_url = "http://127.0.0.1:5000"
    
    # The user ID to query for
    body = {"user_id" :13411351514}



    # The expected response

    # Make a GET request to the API
    response = requests.delete(f"{base_url}/delete_user",json=body)
    assert response.status_code == 200


def test_get_empty_parking_space():
    # Specify the base URL of the API

    base_url = "http://127.0.0.1:5000"
    
    # The user ID to query for
    user_id = 1

    # The expected response
    expected_response = {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com"
    }

    # Make a GET request to the API
    response = requests.get(f"{base_url}/get_empty_parking_space")

    # Assert the status code is 200 (OK)
    assert response.status_code == 200

    # Assert the response contains the correct data
    #assert response.json() == expected_response
