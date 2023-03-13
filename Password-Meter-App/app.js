const a = new Vue({
    el : "#week4lab",

    data : {
        pass : "",
        conditions : {
            uppercase : "rgba(255, 0, 0, 0.4)",
            lowercase : "rgba(255, 0, 0, 0.4)",
            special : "rgba(255, 0, 0, 0.4)",
            digit : "rgba(255, 0, 0, 0.4)",
            len : "rgba(255, 0, 0, 0.4)",
        },
        strength : "Please enter a valid password !!"
    },

    computed : {

    },

    methods : {

        calc_strength : function () {
            let count = 0;

            for (ele in this.conditions)
                if (this.conditions[ele] == "rgba(0, 255, 0, 0.4)") count += 1;
                
            if (count == 5) this.strength = "Very Good";
            else if (count == 4) this.strength = "Good";
            else if (count == 3) this.strength = "Average";
            else if (count == 2) this.strength = "Poor";
            else if (count == 1) this.strength = "Very Poor";
            else this.strength = "Please enter a valid password !!"
        }

    },

    watch : {
        pass (newValue) {

            this.conditions.uppercase = "rgba(255, 0, 0, 0.4)";
            this.conditions.lowercase = "rgba(255, 0, 0, 0.4)";
            this.conditions.special = "rgba(255, 0, 0, 0.4)";
            this.conditions.digit = "rgba(255, 0, 0, 0.4)";
            this.conditions.len = "rgba(255, 0, 0, 0.4)";

            if (newValue.length >= 8) 
                this.conditions.len = "rgba(0, 255, 0, 0.4)"

            for (let i = 0; i < newValue.length; i++) {

                let unicode_value = newValue.charCodeAt(i);

                if (unicode_value >= 65 && unicode_value <= 90)
                    this.conditions.uppercase = "rgba(0, 255, 0, 0.4)"

                else if (unicode_value >= 97 && unicode_value <= 122)
                    this.conditions.lowercase = "rgba(0, 255, 0, 0.4)"

                else if (unicode_value >= 48 && unicode_value <= 57)
                    this.conditions.digit = "rgba(0, 255, 0, 0.4)"

                else if ((unicode_value >= 33 && unicode_value <= 47) || (unicode_value >= 58 && unicode_value <= 63))
                    this.conditions.special = "rgba(0, 255, 0, 0.4)"
            }

            this.calc_strength();

        }
    }
})