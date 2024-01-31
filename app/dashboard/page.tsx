import { lusitana } from '../ui/fonts';

export default function page() {
  return (
    <div
      className={`${lusitana.className} mt-5 text-center text-3xl font-bold text-red-700 underline `}
    >
      Dashboard Page
    </div>
  );
}
