export const setItem=(key, value)=>{
localStorage.setItem(key, JSON.stringify(value));
}
export const getItem=(key, value)=>{
   const saved= localStorage.getItem(key)
   return saved? JSON.parse(saved):value
}
export const removeItem = (key) => {
  localStorage.removeItem(key);
};

export const clearStorage = () => {
  localStorage.clear();
};