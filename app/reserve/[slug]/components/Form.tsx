const Form = () => {
  return (
    <div className="mt-10 flex w-[660px] flex-wrap justify-between">
      <input
        className="mb-4 w-80 rounded border p-3"
        type="text
              "
        placeholder="First name"
      />
      <input
        className="mb-4 w-80 rounded border p-3"
        type="text
              "
        placeholder="Last name"
      />
      <input
        className="mb-4 w-80 rounded border p-3"
        type="text
              "
        placeholder="Phone number"
      />
      <input
        className="mb-4 w-80 rounded border p-3"
        type="text
              "
        placeholder="Email"
      />
      <input
        className="mb-4 w-80 rounded border p-3"
        type="text
              "
        placeholder="Occasion(optional)"
      />
      <input
        className="mb-4 w-80 rounded border p-3"
        type="text
              "
        placeholder="Special request(optional)"
      />
      <button className="w-full rounded bg-red-600 p-3 font-bold text-white disabled:bg-gray-400">
        Complete reservations
      </button>
      <p className="mt-5 text-sm font-light">
        By clicking “Complete reservation” you agree to the OpenTable Terms of
        Use and Privacy Policy. Standard text message rates may apply. You may
        opt out of receiving text messages at any time.
      </p>
    </div>
  );
};

export default Form;
