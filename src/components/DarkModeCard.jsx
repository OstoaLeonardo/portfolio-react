export function DarkModeCard() {
    return (
        <div className='flex justify-center items-center col-span-1 aspect-square rounded-2xl sm:rounded-3xl overflow-hidden p-10 bg-crayon dark:bg-slate-800'>
            <label className='relative inline-flex items-center cursor-pointer'>
                <input id='theme-toggle' type='checkbox' value='' className='sr-only peer' />
                <div className='flex w-11 h-6 bg-gray-600 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-slate-900 peer-checked:after:translate-x-full peer-checked:after:border-white after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600'></div>
            </label>
        </div>
    )
}
