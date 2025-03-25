import React, {Suspense} from 'react';
import Loader from '../components/shared/loader';
import styles from './layout.module.scss';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../components/shared/sidebar';
import Navbar from '../components/shared/navbar';
import utils from "../utils/localstorage";

function main() {
  const navigate = useNavigate();

  useEffect(() => {
    const Authkey = utils.getFromLocalStorage("auth_key");
    if (!Authkey) {
      navigate("/");
    }
  },[]);
  return (
    <main className={styles.container}>
        <Suspense fallback={<Loader></Loader>}>
        {/* Sidebar */}
        <Sidebar></Sidebar>
        <div className={styles.main}>
            {/* Navbar */}
            <Navbar></Navbar>
            <section className={styles.content}>
                <Outlet></Outlet>
            </section>
        </div>
        </Suspense>
    </main>
  )
}

export default main