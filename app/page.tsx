import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      {/* Navigation */}
      <header className="border-b border-stone-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-serif text-2xl font-bold text-stone-800">Ethical Reflections</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#journey" className="text-stone-600 hover:text-stone-900 transition-colors">
              My Journey
            </Link>
            <Link href="#principles" className="text-stone-600 hover:text-stone-900 transition-colors">
              Principles
            </Link>
            <Link href="#conclusion" className="text-stone-600 hover:text-stone-900 transition-colors">
              Conclusion
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 border-b border-stone-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-stone-800 leading-tight mb-6">
              Simple Ethics for a Complex World
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 mb-10 leading-relaxed">
              A personal journey from skepticism to ethical clarity through three guiding principles.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="journey" className="py-20 md:py-32 border-b border-stone-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-800 mb-8">My Ethical Journey</h2>

            <div className="space-y-6 text-stone-600">
              <p className="text-lg">
                I was never someone who particularly cared about the semantics or complexities of ethics. To me, ethical
                literature or exercises seemed like meaningless thought experiments that had little basis in
                practicality. However, my mind has changed over the course of this class.
              </p>

              <p className="text-lg">
                As I skimmed through the first few readings, because honestly it was kind of hard coming into this to
                take it seriously, I found myself genuinely interested in what each author had to say. Especially one of
                the first readings, I believe it was called "The Intuitive Dog and its Rational Tail," which helped
                point out certain flaws in the human mind and the way it perceives events that make it difficult to
                develop your character.
              </p>

              <p className="text-lg">
                Between class discourse and contemplative reading, I found myself increasingly considering what my
                ethics were. What were the principles I lived by? What were the principles I should live by? Certainly
                not easy questions, which is why they didn't have easy answers.
              </p>

              <div className="my-8 p-6 bg-stone-100 rounded-lg border-l-4 border-stone-400">
                <p className="italic text-stone-700">
                  "Before me lay preliminary questions like what makes a good life, how can you decide what principles
                  are good, and how can you even identify where you stand on an ethical scale?"
                </p>
              </div>

              <p className="text-lg">
                The more I debated myself, the more I realized that developing a complicated ethical system wouldn't do
                me any good. Why? Because humans are dumb, including myself. In your day-to-day life, you can't remember
                much of anything.
              </p>

              <p className="text-lg">
                Trying to think about the 24 VIA character strengths before you do something or Aristotle's "10 Rules
                for a Good Life" is too hard. The fact is the human brain is driven more by habit than cognition, so
                your ethics have to be easy, otherwise, you won't implement them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section id="principles" className="py-20 md:py-32 border-b border-stone-200">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-800 text-center mb-16">
            Three Simple Principles
          </h2>

          <div className="max-w-3xl mx-auto space-y-6 text-stone-600 mb-12">
            <p className="text-lg">
              That's not to say that reading philosophical texts or learning about VIA's character strengths won't help,
              they certainly will. You can't distill your ethics into simple principles without first fleshing them out,
              but when you think about what to do in a tricky situation, you need to have an ethical guidepost or two.
              Those guideposts are your true ethics.
            </p>
            <p className="text-lg">For me, I settled on three simple principles:</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Principle 1: Honesty */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200 flex flex-col">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-800 mb-4">Honesty</h3>
              <div className="text-stone-600 mb-6 flex-grow">
                <p className="mb-4">
                  Kantian ethics sums up why this is important best: essentially, it's because by lying to someone you
                  strip them of their humanity. You rid them of their ability to make conscious decisions and treat them
                  as a means to an end.
                </p>
                <p>
                  Thinking about it from a utilitarian perspective as well, in a world where everyone lies about
                  everything all the time, it would cause maximal harm. Even in individual scenarios, it's often rare
                  that lying is a net good.
                </p>
              </div>
              <div className="italic text-amber-700 text-sm border-t border-stone-100 pt-4">
                "Not only does it make you feel better, but it makes your life simpler when you aren't managing a web of
                lies."
              </div>
            </div>

            {/* Principle 2: Genuine Care */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200 flex flex-col">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-rose-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-800 mb-4">Genuine Care</h3>
              <div className="text-stone-600 mb-6 flex-grow">
                <p className="mb-4">
                  The second is to cultivate a genuine wish for the well-being of every human around me. Whether it's
                  someone I love, someone I don't know, or even someone I detest.
                </p>
                <p>
                  As human beings, we're increasingly disconnected in a world where connection is easier than ever. By
                  fostering genuine care for everyone, you naturally become ethical and help build connections to the
                  world around you.
                </p>
              </div>
              <div className="italic text-rose-700 text-sm border-t border-stone-100 pt-4">
                "It gives you the opportunity to practice gratitude, forgiveness, fairness, kindness, love, prudence,
                perspective, all sorts of positive character traits."
              </div>
            </div>

            {/* Principle 3: Earnestness */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200 flex flex-col">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-emerald-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-800 mb-4">Earnestness</h3>
              <div className="text-stone-600 mb-6 flex-grow">
                <p className="mb-4">
                  Finally, be earnest. Treat every day like it's your last, and waste not a single moment of time
                  doom-scrolling. That's not to say you shouldn't relax, but you should relax as though it were the last
                  chance you'll ever get to take a break.
                </p>
                <p>
                  You wouldn't spend the last five-minute break of your life scrolling; you would probably lie
                  absolutely still without a thought in mind, refreshing yourself as much as you could.
                </p>
              </div>
              <div className="italic text-emerald-700 text-sm border-t border-stone-100 pt-4">
                "If you knew it was your last five minutes with a friend, you wouldn't scroll on your phone together;
                you'd likely have a deep conversation or do something meaningful together."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 md:py-32 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <svg
              className="w-12 h-12 text-stone-400 mx-auto mb-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
            </svg>
            <blockquote className="font-serif text-2xl md:text-3xl text-stone-800 leading-relaxed mb-8">
              The human brain is driven more by habit than cognition, so your ethics have to be easy, otherwise, you
              won't implement them.
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-12 h-1 bg-stone-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section id="conclusion" className="py-20 md:py-32 border-b border-stone-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-800 mb-8">Conclusion</h2>

            <div className="space-y-6 text-stone-600">
              <p className="text-lg">
                There's certainly more to ethics than these three principles, but I think many different things can be
                summed up into these three. So, I think about them and try to practice them at all times.
              </p>

              <div className="my-8 p-6 bg-stone-100 rounded-lg border-l-4 border-stone-400">
                <p className="italic text-stone-700">
                  "I'm not perfect, I never will be, but that's what it means to be a human being."
                </p>
              </div>

              <p className="text-lg">
                I was never someone who particularly cared about the semantics or complexities of ethics. To me, ethical
                literature or exercises seemed like meaningless thought experiments that had little basis in
                practicality. However, my mind has changed over the course of this class.
              </p>

              <p className="text-lg">
                I'm not going to go change my major to philosophy or anything like that; however, I would say my mindset
                has shifted in a non-trivial way. The journey from skepticism to finding value in ethical principles has
                been transformative.
              </p>

              <p className="text-lg">
                By focusing on honesty, genuine care for others, and earnestness, I've found a practical framework that
                guides my decisions without requiring complex philosophical calculations in every situation.
              </p>

              <p className="text-lg">
                These principles serve as guideposts that help navigate the complexities of life while remaining true to
                what matters most. They're simple enough to remember and implement, yet profound enough to transform how
                I interact with the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-stone-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Reflect on Your Own Ethical Principles</h2>
            <p className="text-stone-300 text-xl mb-10 leading-relaxed">
              What simple principles guide your life? How do you implement them in your daily actions?
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-stone-900 text-stone-400">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">A personal essay on ethical principles and their practical application.</p>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
