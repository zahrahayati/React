import BookForm from './components/BookForm';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import BookContexProvider from './contexts/BookContext';
function App() {
  return (
    <div className="App">
      <BookContexProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContexProvider>

    </div>
  );
}

export default App;
