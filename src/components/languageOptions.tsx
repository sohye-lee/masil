'use server';
import { db } from "@/db"
import { Language } from "@prisma/client";
 
export default  async function LanguageOptions () {
    const languages = await db.language.findMany(); 
    const renderLanguages =    languages.map(async language => {
        return await   <option key={language.id} value={language.id}>{language.name}</option>
    });

    return {renderLanguages}
}

export const renderLanguages = async () => {
    const languages = await db.language.findMany() ; 
    return languages.map(async language => {
          await   <option key={language.id} value={language.id}>{language.name}</option>
    });
}