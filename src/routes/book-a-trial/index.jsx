import { createSignal, createEffect, For } from "solid-js";
import { selectCourse } from "~/data/selectCourse";
import { addresses } from "~/data/addresses";
import axios from "axios";
import { useToast } from "~/components/PopSolid/PopSolidManager";

export default function BookTrialForm() {
    const [formData, setFormData] = createSignal({
        category: '',
        classGroup: '',
        subject: '',
        studentName: '',
        studentAge: '',
        phoneNumber: '',
        whatsappNumber: '',
        email: '',
        address: '',
        country: '',
        state: '',
        musicSkillLevel: ''
    });

    const [availableStates, setAvailableStates] = createSignal([]);

    const musicSkillLevels = ["Beginner", "Intermediate", "Advanced"];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (name === 'country') {
            const selectedCountry = addresses.find(c => c.country === value);
            setAvailableStates(selectedCountry ? selectedCountry.states : []);
            setFormData(prev => ({ ...prev, state: '' }));
        }
    };

    const getClassGroups = () => {
        const academicCategory = selectCourse.find(c => c.category === 'academics');
        return academicCategory ? academicCategory.classes.map(c => c['class-group']) : [];
    };

    const getSubjects = () => {
        if (formData().category === 'academics') {
            const academicCategory = selectCourse.find(c => c.category === 'academics');
            const selectedClass = academicCategory?.classes.find(c => c['class-group'] === formData().classGroup);
            return selectedClass ? selectedClass.subjects.map(s => s.title) : [];
        } else if (formData().category === 'musics') {
            const musicCategory = selectCourse.find(c => c.category === 'musics');
            return musicCategory ? musicCategory.subjects.map(s => s.title) : [];
        }
        return [];
    };

    const { addToast } = useToast()


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form data to be sent to database:", formData());   
        const url = `${import.meta.env.VITE_IPA}/students`
        try {
            const response = await axios.post(url, {
                'name':formData().studentName,
                'age':formData().studentAge,
                'class':formData().classGroup,
                'skill_level':formData().musicSkillLevel || null,
                'subject':formData().subject,
                'contact_number':formData().phoneNumber,
                'whatsapp_number':formData().whatsappNumber,
                'email':formData().email,
                'address': `${formData().address}, ${formData().state}, ${formData().country}` 
            }); // Wait for the POST request to finish
            // console.log('Success:', response.data); // Handle success
            addToast('success', response.data.message);
        } catch (error) {
            console.error('Error:', error); // Handle error
            addToast('error',error.response.data.errors.class)
            addToast('error',error.response.data.errors.contact_number)
            addToast('error',error.response.data.errors.email)
            addToast('error',error.response.data.errors.name)
            addToast('error',error.response.data.errors.subject)
        }

    };

    const [errorData, setErrorData] = createSignal([])

    return (
        <div class="min-h-screen w-full bg-gradient-to-t from-blue-800/60 to-blue-200 py-20 px-3">
            <div class="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div class="p-6">
                    <h2 class="text-2xl font-bold text-center text-blue-900 mb-6">Book a Trial Class</h2>
                    <form class="space-y-4" onSubmit={handleSubmit}>
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-blue-900">Select Category</label>
                            <select
                                name="category"
                                class="w-full p-2 border border-gray-300 rounded-md"
                                value={formData().category}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Choose category</option>
                                <option value="academics">Academic</option>
                                <option value="musics">Music</option>
                            </select>
                        </div>

                        {formData().category === 'academics' && (
                            <div class="space-y-2">
                                <label class="text-sm font-medium text-blue-900">Select Class</label>
                                <select
                                    name="classGroup"
                                    class="w-full p-2 border border-gray-300 rounded-md"
                                    value={formData().classGroup}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Choose class</option>
                                    <For each={getClassGroups()}>
                                        {(classGroup) => <option value={classGroup}>{classGroup}</option>}
                                    </For>
                                </select>
                            </div>
                        )}

                        {((formData().category === 'academics' && formData().classGroup) || formData().category === 'musics') && (
                            <div class="space-y-2">
                                <label class="text-sm font-medium text-blue-900">Select Subject</label>
                                <select
                                    name="subject"
                                    class="w-full p-2 border border-gray-300 rounded-md"
                                    value={formData().subject}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Choose subject</option>
                                    <For each={getSubjects()}>
                                        {(subject) => <option value={subject}>{subject}</option>}
                                    </For>
                                </select>
                            </div>
                        )}

                        {formData().category === 'musics' && (
                            <div class="space-y-2">
                                <label class="text-sm font-medium text-blue-900">Music Skill Level</label>
                                <select
                                    name="musicSkillLevel"
                                    class="w-full p-2 border border-gray-300 rounded-md"
                                    value={formData().musicSkillLevel}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Select skill level</option>
                                    <For each={musicSkillLevels}>
                                        {(level) => <option value={level}>{level}</option>}
                                    </For>
                                </select>
                            </div>
                        )}

                        <div class="grid md:grid-cols-2 gap-4">
                            <div class="space-y-2">
                                <label class="text-sm font-medium text-blue-900">Student Name</label>
                                <input
                                    type="text"
                                    name="studentName"
                                    placeholder="Enter student name"
                                    class="w-full p-2 border border-gray-300 rounded-md"
                                    value={formData().studentName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div class="space-y-2">
                                <label class="text-sm font-medium text-blue-900">Student Age</label>
                                <input
                                    type="number"
                                    name="studentAge"
                                    placeholder="Enter age"
                                    class="w-full p-2 border border-gray-300 rounded-md"
                                    value={formData().studentAge}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium text-blue-900">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter email address"
                                class="w-full p-2 border border-gray-300 rounded-md"
                                value={formData().email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>


                        <div class="space-y-2">
                            <label class="text-sm font-medium text-blue-900">Phone Number</label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                placeholder="Enter phone number"
                                class="w-full p-2 border border-gray-300 rounded-md"
                                value={formData().phoneNumber}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium text-blue-900">Whatsapp Number</label>
                            <input
                                type="tel"
                                name="whatsappNumber"
                                placeholder="Enter whatsapp number"
                                class="w-full p-2 border border-gray-300 rounded-md"
                                value={formData().whatsappNumber}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium text-blue-900">Address</label>
                            <input
                                type="text"
                                name="address"
                                placeholder="Enter address"
                                class="w-full p-2 border border-gray-300 rounded-md"
                                value={formData().address}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div class="grid md:grid-cols-2 gap-4 mb-8">
                            <div class="space-y-2">
                                <label class="text-sm font-medium text-blue-900">Country</label>
                                <select
                                    name="country"
                                    class="w-full p-2 border border-gray-300 rounded-md"
                                    value={formData().country}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select country</option>
                                    <For each={addresses}>
                                        {(country) => <option value={country.country}>{country.country}</option>}
                                    </For>
                                </select>
                            </div>

                            <div class="space-y-2">
                                <label class="text-sm font-medium text-blue-900">State</label>
                                <select
                                    name="state"
                                    class="w-full p-2 border border-gray-300 rounded-md"
                                    value={formData().state}
                                    onChange={handleInputChange}
                                    disabled={!formData().country}
                                >
                                    <option value="">Select state</option>
                                    <For each={availableStates()}>
                                        {(state) => <option value={state.name}>{state.name}</option>}
                                    </For>
                                </select>
                            </div>
                        </div>

                        <button
                            type="submit"
                            class="w-full hover:scale-95 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
                        >
                            Book Trial Class
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

