import { Target, Lightbulb, Shield, Leaf, Briefcase, Award } from "lucide-react"

export default function About() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://drive.google.com/thumbnail?id=1VznIBeqHyh4Z6Wgd7PCPU2PLMHlW2d1C&sz=w1920"
            alt="E & F General Concepts Limited"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-white/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl lg:text-center">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
              Building Lasting Partnerships & Economic Transformation.
            </h1>
            <div className="mt-8 space-y-6 text-lg leading-8 text-black text-left font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              <p>
                E & F General Concepts Limited is a proudly Nigerian company, duly registered with the Corporate Affairs Commission (CAC) to operate across critical sectors of the economy. Established with a vision to drive sustainable development and industrial growth, the company is positioned as a dynamic and diversified enterprise committed to delivering value-driven solutions.
              </p>
              <p>
                With a strong foundation built on professionalism, integrity, and innovation, E & F General Concepts Limited operates across key sectors including agro-allied services, engineering and construction, procurement, project management, and industrial development. The company is strategically aligned with Nigeria’s economic priorities, focusing on initiatives that promote local content, reduce import dependency, and stimulate job creation.
              </p>
              <p>
                E & F General Concepts Limited leverages a team of experienced professionals and technical partners to deliver high-quality, efficient, and cost-effective solutions tailored to meet client and stakeholder needs. Through strategic collaborations, public-private partnerships (PPP), and joint venture arrangements, the company continues to position itself as a reliable partner in large-scale, impact-driven projects.
              </p>
              <p>
                Driven by a commitment to excellence and sustainable growth, E & F General Concepts Limited aims to contribute meaningfully to national development while maintaining global standards in all its operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="bg-muted rounded-3xl p-10 lg:p-16 flex flex-col items-start">
              <div className="rounded-lg bg-[hsl(var(--primary))] p-3 mb-6">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Our Mission</h2>
              <p className="text-lg leading-8 text-muted-foreground">
                To deliver quality and innovative services that exceed client expectations, adhere to conventional standards, and demonstrate the highest level of professionalism in project execution.
              </p>
            </div>
            <div className="bg-muted rounded-3xl p-10 lg:p-16 flex flex-col items-start">
              <div className="rounded-lg bg-[hsl(var(--secondary))] p-3 mb-6">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Our Vision</h2>
              <p className="text-lg leading-8 text-muted-foreground">
                To be a pacesetter in our industry, driven by innovation and a commitment to setting new benchmarks for excellence across Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Core Values</h2>
            <p className="mt-4 text-lg text-muted-foreground">The principles that guide our every action.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-card border rounded-2xl p-8 shadow-sm">
              <Award className="h-8 w-8 text-[hsl(var(--primary))] mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Consistency</h3>
              <p className="text-muted-foreground">We deliver dependable, repeatable excellence across all engagements.</p>
            </div>
            <div className="bg-card border rounded-2xl p-8 shadow-sm">
              <Shield className="h-8 w-8 text-[hsl(var(--secondary))] mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Integrity</h3>
              <p className="text-muted-foreground">We uphold honesty, transparency, and accountability in every transaction.</p>
            </div>
            <div className="bg-card border rounded-2xl p-8 shadow-sm">
              <Leaf className="h-8 w-8 text-[hsl(var(--primary))] mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Environmental Stewardship</h3>
              <p className="text-muted-foreground">We integrate sustainable practices into all projects, protecting the communities where we operate.</p>
            </div>
            <div className="bg-card border rounded-2xl p-8 shadow-sm">
              <Briefcase className="h-8 w-8 text-[hsl(var(--secondary))] mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Professionalism</h3>
              <p className="text-muted-foreground">We conduct business with competence, ethical rigor, and respect for industry standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Leadership Team</h2>
            <p className="mt-4 text-lg text-muted-foreground">The experienced professionals driving our vision forward.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Team Member 1 */}
            <div className="bg-card border rounded-2xl overflow-hidden shadow-sm flex flex-col">
              <img src="https://drive.google.com/thumbnail?id=1-8owGj04Z26HxEsvuNWkciL0YyAs0egY&sz=w1000" alt="Ani Eja" referrerPolicy="no-referrer" className="w-full h-72 object-cover object-top" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">Ani Eja</h3>
                <p className="text-[hsl(var(--primary))] font-medium">Director, Administration</p>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="bg-card border rounded-2xl overflow-hidden shadow-sm flex flex-col">
              <img src="https://drive.google.com/thumbnail?id=1OCg8R_4h2I47NZYHV1pCMr3r7WnC1Ipu&sz=w1000" alt="Engr. Ezege Okon Eja" referrerPolicy="no-referrer" className="w-full h-72 object-cover object-top" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">Engr. Ezege Okon Eja</h3>
                <p className="text-[hsl(var(--primary))] font-medium">Managing Director</p>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="bg-card border rounded-2xl overflow-hidden shadow-sm flex flex-col">
              <img src="https://drive.google.com/thumbnail?id=1Z_S1xWSdokHA44tAexcj3aXVYoR4rdFe&sz=w1000" alt="Wubung Iyam" referrerPolicy="no-referrer" className="w-full h-72 object-cover object-top" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">Wubung Iyam</h3>
                <p className="text-[hsl(var(--primary))] font-medium">Director, Projects</p>
              </div>
            </div>
            {/* Team Member 4 */}
            <div className="bg-card border rounded-2xl overflow-hidden shadow-sm flex flex-col">
              <img src="https://drive.google.com/thumbnail?id=122eE17j9n3sArG8yCWvFjZwcctE7X7jO&sz=w1000" alt="Israel Lebo Gual" referrerPolicy="no-referrer" className="w-full h-72 object-cover object-top" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">Israel Lebo Gual</h3>
                <p className="text-[hsl(var(--primary))] font-medium">Director, Operations</p>
              </div>
            </div>
            {/* Team Member 5 */}
            <div className="bg-card border rounded-2xl overflow-hidden shadow-sm flex flex-col">
              <img src="https://drive.google.com/thumbnail?id=1oteL5h_rcok42PeudPFYrAMuMbq4aZfb&sz=w1000" alt="Ajoke Grace Sanusi" referrerPolicy="no-referrer" className="w-full h-72 object-cover object-top" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">Ajoke Grace Sanusi</h3>
                <p className="text-[hsl(var(--primary))] font-medium">HR / Manager</p>
              </div>
            </div>
            {/* Team Member 6 */}
            <div className="bg-card border rounded-2xl overflow-hidden shadow-sm flex flex-col">
              <img src="https://drive.google.com/thumbnail?id=1BnQkylwcJkHdFNqrtBmoKiZORcG6XZaI&sz=w1000" alt="Barr. Elemi Martins" referrerPolicy="no-referrer" className="w-full h-72 object-cover object-top" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">Barr. Elemi Martins</h3>
                <p className="text-[hsl(var(--primary))] font-medium">Head of Legal</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
