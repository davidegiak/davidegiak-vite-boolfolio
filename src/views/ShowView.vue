<script>
import axios from 'axios';

export default {
    name: 'ShowView',
    data() {
        return {
            base_url: 'http://127.0.0.1:8000',
            project: null
        }
    },
    mounted() {
        const url = `${this.base_url}/api/projects/${this.$route.params.id}`
        console.log(url);
    }
}
</script>