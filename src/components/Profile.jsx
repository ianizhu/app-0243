import styles from "./Profile.module.css";

const mailStyle = {
    color: "blue",
    fontSize: 1.5 + 'rem'
}

export const Profile = (props) => {
    let newUser = props.function();
    console.log(newUser);
    return (
    <>
    <h3>Профиль пользователя</h3>
    <div className="row">
        <div className="col-md-8">
            <h4 className={styles.name}>Фамилия и Имя: <span>{newUser.lastname} {newUser.name}</span></h4>
            <p className={styles.id}>ID<span>{newUser.id}</span></p>
            <p style={mailStyle}>Email: <span>{newUser.email}</span></p>
            <p style={{color: "red", fontStyle: "italic", fontSize: 24}}>
                Обо мне:<span>{newUser.about}</span>
            </p>
        </div>

        <div className="col-md-4">
            <img className={styles.img} src={newUser.avatar} alt="" />
        </div>
    </div>
    </>

    );
  }