import Navbar from 'componemt/app/components/Navbar';
import Form from './components/Form';
import Header from './components/Header';

export default function Reserve() {
  return (
    <main className="min-h-screen w-screen bg-gray-100">
      <main className="m-auto max-w-screen-2xl bg-white">
        <Navbar />
        <div className="h-screen border-t">
          <div
            className="
m-auto w-3/5 py-9"
          >
            <h3 className="font-bold">You're almost done</h3>
            <Header />
            <Form />
          </div>
        </div>
      </main>
    </main>
  );
}
