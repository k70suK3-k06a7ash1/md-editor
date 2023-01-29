export const separateH1 = (content: string) => {

  const splitContent = content.split("\n");
  
      const separatedSection :string[][]= []
      let current = 0
      splitContent.map((row) => {
      if(/# /.test(row)){
        current +=1
        const newRow :string[]= []
        newRow.push(row)
        separatedSection.push(newRow)
      } else {
        separatedSection[current-1]?.push(row)
      }
  })

console.log(separatedSection)

  return separatedSection
  
  }