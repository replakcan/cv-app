function GenInfoSection({ state }) {
  const { name, email, phone } = state

  return (
    <>
      <p>
        <span>Name:</span> {name}
      </p>
      <p>
        <span>Email:</span> {email}
      </p>
      <p>
        <span>Phone:</span> {phone}
      </p>
    </>
  )
}

export default GenInfoSection
