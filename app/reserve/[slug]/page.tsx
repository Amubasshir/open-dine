import Form from './components/Form';
import Header from './components/Header';

export default function Reserve() {
  return (
    <>
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
    </>
  );
}
