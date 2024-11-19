import TeamsForm from './Teams/TeamsForm';
export default function Teams() {
  return (
    <div className="h-full flex flex-col justify-start bg-primary p-5 rounded-lg border-2 border-tertiaryLight text-lg ">
      <TeamsForm />
    </div>
  );
}
