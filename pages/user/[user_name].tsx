import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import React from "react";
import { UserDetail } from "../../lib/pages/users/model";
import styles from "../../styles/User.module.css";
// import Loading from "../../components/animation/loading";

interface UserProps {
  data?: UserDetail;
}

/**
 * data param could be the data being passed by the SSR function.
 * @param dataß
 * @constructor
 */
const User = ({ data }: UserProps) => {
  const router = useRouter();

  const { user_name } = router.query;

  const detailsCard = (name: string, valie: string) => {
    return (
      <div className={styles.contentContainer}>
        <div className={styles.content}>{name}:</div>
        <div data-testid={`context-value-${name}`} className={styles.content}>
          {valie}
        </div>
      </div>
    );
  };

  if (!data) {
    return (
      <p data-testid="error-message">
        user_name of {user_name} was found or not.
      </p>
    );
  }

  return (
    <div className={styles.container}>
      <h4>User details</h4>
      <div className={styles.detialContainer}>
        {detailsCard("name", data.name)}
        {detailsCard("email", data.email)}
        {detailsCard("website", data.website)}
      </div>
      {/*this is a loading example <Loading></Loading> */}
    </div>
  );
};

// TODO: looks like here's a good place to add the server side rendering function
// The SSR function should also fetch data from our fake API https://jsonplaceholder.typicode.com/users/ (using GET)
// Maybe you should also pass the data to the Page?

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { user_name } = context.query;
  try {
    //TODO: having issue for just giving /api/user
    const res = await axios.get<UserDetail>(
      `http://localhost:3000/api/user/${user_name}`
    );

    const data: UserDetail = await res.data;
    return { props: { data } };
  } catch (e) {
    //TODO error handling
    return { props: { data: null } };
  }
}

export default User;
