export default function Button({ children, bg }) {
  const classList = `rounded-md p-2 text-white text-center ${bg ? bg : ''}`;

  return <button className={classList}>{children}</button>;
}
