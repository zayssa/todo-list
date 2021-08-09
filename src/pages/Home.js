import React, { Fragment, useContext, useEffect } from "react";
import { Form } from "../components/Form";
import { Notes } from "../components/Notes";
import { FirebaseContext } from "../Context/firebase/firebaseContext";
import { Loader } from "../components/Loader";

export const Home = () => {
  const { loading, notes, fetchNotes, removeNote } =
    useContext(FirebaseContext);

  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Form />

      <hr />
      {loading ? (
        <Loader />
      ) : notes.length ? (
        <Notes notes={notes} onRemove={removeNote} />
      ) : (
        "Nothing to show"
      )}
    </Fragment>
  );
};
