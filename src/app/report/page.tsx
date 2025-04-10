export default function Report() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white p-10 font-serif">
        <h1 className="text-4xl text-center font-bold mb-10 drop-shadow-lg tracking-wider">
          ✧ รายงานการบิด ✧
        </h1>
  
        <form className="max-w-2xl mx-auto bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-2xl p-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-black  text-lg font-semibold mb-2">
              ชื่อเหตุ:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your legendary name..."
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
  
          <div>
            <label htmlFor="who" className="block text-lg text-black font-semibold mb-2">
              ผู้ก่อเหตุ:
            </label>
            <select
              id="who"
              name="who"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="person1">Temp 1</option>
              <option value="person2">Temp 2</option>
              <option value="person3">Temp 3</option>
            </select>
          </div>
  
          <div>
            <label htmlFor="when" className="block text-black  text-lg font-semibold mb-2">
              วันเกิดเหตุ:
            </label>
            <input
              type="date"
              id="when"
              name="when"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
  
          <div>
            <label htmlFor="description" className="block text-black  text-lg font-semibold mb-2">
              คำเบิกความ:
            </label>
            <textarea
              id="description"
              name="description"
              rows={5}
              placeholder="Speak, mortal, and tell thy tale..."
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>
  
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-md text-lg font-bold shadow-lg hover:brightness-110 transition-all duration-300"
          >
            ร้องเรียนการบิด
          </button>
        </form>
      </div>
    );
  }
  