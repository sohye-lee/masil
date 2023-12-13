import Hero from "@/components/hero";
import { db } from "@/db";
import { PrismaClient } from "@prisma/client";
import HomeImage from "public/home.jpg";
 

export default async function Home() {
  const topics = await db.topic.findMany();
  const renderTopics = topics.map(topic => {
      return (
          <div key={topic.id}>
              {topic.name}
          </div>
      )
  })
  const languages = await db.language.findMany();
  const renderLanguages = languages.map(language => {
    return (
        <div key={language.id}>
            {language.name}
        </div>
    )
})

  const questions = await db.question.findMany();
  const renderQuestions = questions.map(q => {
    return (
      <a className="p-3 bg-slate-50" key={q.id} href={`/questions/${q.id}`}>
        <h4 className="font-semibold">{q.title}</h4>
        <p>{q.description}</p>
        <p className="text-sm">{q.liked? q.liked : 0}</p>
        <p>{q.topicId}</p>
      </a>
    )
  })
  return (
    <div className='w-full'>
        <Hero 
            title="Home" 
            description='here is the place' 
            imgAlt='' 
            imgData={HomeImage} 
        />
        <div className="container">
          <div className="w-80 mx-auto py-8">
            {renderTopics}
          </div>
          <div className="w-80 mx-auto py-8">
            {renderQuestions}
          </div><div className="w-80 mx-auto py-8">
            {renderLanguages}
          </div>
        </div>
        
    </div>
  )
}
