function Form({ handleFilterTitle }) {
  const handleInput = (event) => {
    handleFilterTitle(event.currentTarget.value);
  };
  return (
    <form>
      <input
        type="text"
        placeholder="Find your flowers"
        onInput={handleInput}
      ></input>
    </form>
  );
}
export default Form;
