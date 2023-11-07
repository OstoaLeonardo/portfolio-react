export function AboutMeCard() {
    return (
        <div className='flex flex-col justify-end col-span-3 md:row-span-2 rounded-2xl sm:rounded-3xl p-10 bg-slate-500 dark:bg-slate-800 bg-opacity-10 bg-gradient-to-r from-bright dark:from-slate-700 to-crayon dark:to-slate-800'>
            <h1 className='text-slate-800 dark:text-slate-100 text-3xl md:text-4xl xl:text-5xl font-bold mb-5'>
                ✌️ Hi, I'am Duilio Ostoa
            </h1>
            <p className='text-slate-700 dark:text-slate-100 text-md md:text-xl xl:text-2xl'>
                <b>Software developer</b> from Mexico.
                Student of Software Engineering at the Polytechnic University of Pachuca.
                Passionate about technology and learn new things.
                Learning about <b>web</b> and <b>mobile development</b>.
            </p>
        </div>
    )
}
