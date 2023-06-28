export default function Button({
  value,
  onSubmitForm = (e) => e.preventDefault(),
  isActive = true,
}) {
  return (
    <button
      className={`${isActive ? "active-btn" : "deactive-btn"} btn`}
      onClick={onSubmitForm}
    >
      {value}
    </button>
  );
}
