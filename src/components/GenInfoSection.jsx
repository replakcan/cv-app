function GenInfoSection({ state }) {
  const { name, email, phone } = state

  return (
    <>
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </>
  )
}

export default GenInfoSection