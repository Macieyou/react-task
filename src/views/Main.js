import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {UsersContext} from "../contexts/UsersContext";
import AddUser from "../components/AddUser";
import Container from "../components/Container";
import UserCard from '../components/UserCard';

const Main = () => {
  const [users] = useContext(UsersContext);
  const history = useHistory();

    return (
        <Container>
            <AddUser/>
            <div className="users-cards-wrapper">
                {users.map(user => (
                    <UserCard key={user.id}
                      name={user.name}
                      email={user.email}
                      phone={user.phone}
                      desc={user.description}
                      event={() => history.push(`/user/${user.id}`)}
                    />
                ))}
            </div>
        </Container>
    );
}

export default Main;