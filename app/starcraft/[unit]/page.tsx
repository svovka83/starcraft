export default function Unit({
  params: { unit },
}: {
  params: { unit: string };
}) {
  return (
    <>
      <h1>Unit: {unit}</h1>
    </>
  );
}
