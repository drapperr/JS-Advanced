function result() {
    return {
        add= function (vec1, vec2) {
            let xa = vec1[0];
            let ya = vec1[1];
            let xb = vec2[0];
            let yb = vec2[1];

            return [xa + xb, ya + yb];
        },

        multiply= function (vec1, scalar) {
            let xa = vec1[0];
            let ya = vec1[1];

            return [xa * scalar, ya * scalar];
        },

        length= function (vec1) {
            let xa = vec1[0];
            let ya = vec1[1];

            return Math.sqrt(xa ** 2 + ya ** 2, 2);
        },

        dot= function (vec1, vec2) {
            let xa = vec1[0];
            let ya = vec1[1];
            let xb = vec2[0];
            let yb = vec2[1];

            return xa * ya + xb + yb;
        },

        cross= function (vec1, vec2) {
            let xa = vec1[0];
            let ya = vec1[1];
            let xb = vec2[0];
            let yb = vec2[1];

            return xa * yb - ya * xb;
        }
    }
}

var answer = result.add([1, 1], [1, 0]);