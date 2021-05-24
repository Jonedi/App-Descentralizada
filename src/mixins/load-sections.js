// Utilidades
import { camelCase, upperFirst } from 'lodash'

export default function (sections = []) {
    return {
        name: 'LoadSections',

        /* Iterar la lista de componentes
        y retornar una función que retorna una
        promesa */
        components: sections.reduce((acc, cur) => {
            const name = upperFirst(camelCase(cur))

            acc[`Section${name}`] = () => import(`@/views/sections/${name}.vue`)

            return acc
        }, {}),

        data: () => ({ sections }),
    }
}