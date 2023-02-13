// type TagLiteral = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
//   const splitLiteralToNumber = (splitKey: TagLiteral) => {
//     switch (splitKey) {
//       case "h1":
//         return 1;
//       case "h2":
//         return 2;

//       case "h3":
//         return 3;

//       case "h4":
//         return 4;

//       case "h5":
//         return 5;

//       case "h6":
//         return 6;

//       default: {
//         splitKey satisfies never;
//         return 1;
//       }
//     }
//   };

export const splitByTag = (
  content: string
  // splitKey: TagLiteral
) => {
  const splitCotent = content.split("\n");

  //const numberOfLiteral = splitLiteralToNumber(splitKey);
  //const pattern = new RegExp(`^\#{${numberOfLiteral}}(?=\s)(.*)$`);

  const pattern = /^\#{1}(?=\s)(.*)$/;
  const result: string[][] = [];
  for (let row of splitCotent) {
    row.match(pattern)
      ? result?.push([row])
      : result[result.length - 1]?.push(row);
  }
  return result?.map((element) => element.join("\n"));
};
