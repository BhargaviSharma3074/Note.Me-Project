import React from 'react'
import styles from './notes.module.scss';
import Wrapper from '../../components/hoc/wrapper';
import Greeting from '../../components/atoms/greeting';
import Note from '../../components/cards/note';
import notesData from '../../data/notes.json';
function Notes() {
  const [notesColl, setNotesColl] = useState([]);
  const data = utils.getFromLocalStorage(types.NOTES_DATA);
  
  useEffect(() => {
    if (data && data.length) {
      setNotesColl(data);
    } else {
      utils.addToLocalStorage(types.NOTES_DATA, notesData);
      setNotesColl(notesData);
    }
  }, [data]);
  return (
    <section className={styles.container}>
        <Greeting></Greeting>
        <main>
          {notesData.map((note, i)=> <Note key={note.id} text={note.text} color={note.color} date={note.createdAt}></Note>)}
        </main>
    </section>
  );
}

export default Wrapper(Notes);