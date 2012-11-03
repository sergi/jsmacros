/**
 * This adds Ocaml-style pattern matching to JavaScript
 */

macro match {
    case ($exp:expr) with { $(| ($exp2:ExpressionStatement) -> $result:expr) (,) ... } => {
        (function match() {
            var arr = [];
            $(arr.push([$exp2, $result])) ...
            for (var i = 0; i<arr.length; i++) {
                if (arr[i][0] == $exp) {
                    return arr[i][1]
                    break
                }
            }

        })()
    }
}

var test = match (12) with {
    | (6*2) -> "Yay!",
    | (13) -> "Boo"
}

console.log(test);

