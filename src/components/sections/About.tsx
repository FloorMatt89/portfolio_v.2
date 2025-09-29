import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function About() {
  return (
    <>
      <div className="space-y-6">
        <h2 className="text-purple-blue text-2xl">About Me</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <Image
              src="/ME2.jpg"
              alt="Matthew Segura"
              width={800}
              height={800}
              className="w-full rounded-lg border-2 border-card-border shadow-lg object-cover"
            />
          </div>
          <div className="md:w-2/3">
            <Card className="p-6 bg-card border-card-border">
              <p className="mb-4">$ cat about.txt</p>
              <div className="text-green">
                <ul className="flex flex-col gap-2">
                  <li> Hi I&apos;m Matthew, an undergraduate Computer science student at the University of Florida</li>
                  <li>I constantly learning about mobile/web development, and machine learning applications</li>
                  <li> Most of my experience is in <span className="text-blue">mobile development</span>, <span className="text-blue">ML engineering</span>, and <span className="text-blue">team leadership</span></li>
                </ul>
              </div>
              <p className="mt-4 text-blue">Key Projects:</p>
              <ul className="list-disc list-inside mt-2 text-purple">
                <li>iOS Lead @ <Link className="text-blue underline" href="https://github.com/shpe-uf/SHPE-UF-Mobile-Swift">SHPE UF Mobile App</Link></li>
                <li> Web Software Engineer/Co-founder @ Pilot Car Rental</li>
                <li>Lead Mobile Developer @ Bealls Inc. </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
