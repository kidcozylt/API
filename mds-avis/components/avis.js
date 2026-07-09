import { StarIcon } from '@heroicons/react/20/solid'

const reviews = [
  {
    name: 'Léa Martin',
    school: 'ESSEC Business School',
    rating: 5,
    date: 'Il y a 2 jours',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'Un corps professoral très investi et un vrai réseau alumni. Le campus est excellent et les nombreux partenariats à l’international m’ont permis de faire un double diplôme.',
  },
  {
    name: 'Hugo Bernard',
    school: 'Polytech Lyon',
    rating: 4,
    date: 'Il y a 5 jours',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'Formation exigeante mais qui paie : beaucoup de projets concrets en lien avec les entreprises locales. Quelques amphis surchargés en première année.',
  },
  
]

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Note : ${rating} sur 5`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <StarIcon
          key={i}
          aria-hidden="true"
          className={`size-4 ${i < rating ? 'text-amber-400' : 'text-slate-200'}`}
        />
      ))}
    </div>
  )
}

export default function Avis() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-4xl">
            Les avis de la communauté
          </h2>
          <p className="mt-6 text-lg/8 text-slate-500">
            Des avis vérifiés, laissés par des étudiants et anciens élèves, pour t'aider à choisir ton école en
            toute confiance.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-10 sm:grid-cols-2 xl:col-span-2">
          {reviews.map((review) => (
            <li
              key={review.name}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm ring-1 ring-slate-100"
            >
              <div className="flex items-center gap-x-4">
                <img
                  alt=""
                  src={review.imageUrl}
                  className="size-12 rounded-full outline-1 -outline-offset-1 outline-slate-200"
                />
                <div>
                  <h3 className="text-base/6 font-semibold text-slate-900">{review.name}</h3>
                  <p className="text-sm/6 font-semibold text-teal-700">{review.school}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <StarRating rating={review.rating} />
                <span className="text-xs text-slate-400">{review.date}</span>
              </div>
              <p className="mt-4 text-sm/6 text-slate-600">{review.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}