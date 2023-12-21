import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Room Rent Website</h1>
      </header>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Rooms</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <main>
        <section className="banner">
          <h2>Welcome to our website!</h2>
          <p>We offer a variety of rooms to rent for short or long term stays.</p>
        </section>
        <section className="rooms">
          <h2>Our Rooms</h2>
          {/* Room components will be dynamically rendered here */}
        </section>
        <section className="about">
          <h2>About Us</h2>
          <p>We are a family-owned business that has been providing quality accommodations for over 10 years. Our rooms are clean, comfortable, and affordable.</p>
          <p>Our staff is friendly and always willing to assist our guests with any needs they may have. We take pride in making sure our guests have an enjoyable and memorable stay with us.</p>
        </section>
        <section className="contact">
          <h2>Contact Us</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
            <input type="submit" value="Send" />
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Room Rent Website</p>
      </footer>
    </div>
  );
}

export default App;
