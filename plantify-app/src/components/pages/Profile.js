import Container from "react-bootstrap/esm/Container";
import ProfileForm from "../ProfileForm";
import "../../styles/Profile.css";

function Profile() {
    return (
        <Container className="profile">
            <h1>Profile</h1>
            <ProfileForm readOnly={true} />
        </Container>
    );
}

export default Profile;