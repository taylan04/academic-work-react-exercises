import styles from "../../styles/ex14.module.css"

export default function UserBio({bio}) {

    return (
        <>
            <p className={styles.bio}>{bio}</p>
        </>
    )
}