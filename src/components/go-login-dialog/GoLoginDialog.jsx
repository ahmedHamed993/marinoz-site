import React from 'react'
import styles from "./goLogin.module.css";
import Dialog from '../dialog/Dialog';
import Link from 'next/link';
const GoLoginDialog = ({open, setOpen}) => {
  return (
    <Dialog open={open} setOpen={setOpen}>
        <div className={styles.go_login}>
            <h6>You need to Login to process</h6>
            <div className={styles?.go_login_actions}>
                <Link href="/Login">Login</Link>
                <button onClick={()=>setOpen(false)}>cancel</button>
            </div>
        </div>
    </Dialog>
)
}

export default GoLoginDialog
