//styles scss
import styles from './App.module.scss';

//components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
       <main className={styles.main}>
          <h1>Conteúdo...</h1>
       </main>
      <Footer/>
    </div>
  );
}

export default App;
