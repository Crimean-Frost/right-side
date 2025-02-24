import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    locales: [
      'ru',
    ],
    translations: {
      "ru": {
        "content-type-builder.plugin.name": "Создание типов данных",
        "content-manager.plugin.name": "Менеджер контента",
        "content-manager.App.schemas.data-loaded": "Схемы были успешно загружены",
        "content-manager.EditRelations.title": "Связанные данные",
        "content-manager.HeaderLayout.button.label-add-entry": "Создать новую запись",
        "content-manager.ListViewTable.relation-loaded": "Отношения были загружены",
        "content-manager.ListViewTable.relation-loading": "Отношения загружаются",
        "content-manager.ListViewTable.relation-more": "Это отношение содержит больше сущностей, чем отображается",
        "content-manager.api.id": "API ID",
        "content-manager.apiError.This attribute must be unique": "{field} должно быть уникальным",
        "content-manager.bulk-publish.already-published": "Уже опубликовано",
        "content-manager.components.AddFilterCTA.add": "Фильтры",
        "content-manager.components.AddFilterCTA.hide": "Фильтры",
        "content-manager.components.DragHandle-label": "Перетащить",
        "content-manager.components.DraggableAttr.edit": "Нажмите чтобы редактировать",
        "content-manager.components.DraggableCard.delete.field": "Удалить {item}",
        "content-manager.components.DraggableCard.edit.field": "Редактировать {item}",
        "content-manager.components.DraggableCard.move.field": "Переместить {item}",
        "content-manager.components.DynamicZone.ComponentPicker-label": "Выберите один компонент",
        "content-manager.components.DynamicZone.add-component": "Добавить компонент в {componentName}",
        "content-manager.components.DynamicZone.delete-label": "Удалить {name}",
        "content-manager.components.DynamicZone.error-message": "Компонент содержит ошибку(-и)",
        "content-manager.components.DynamicZone.missing-components": "{number, plural, =0{# отсутствующих компонентов} one{# отсутствующий компонент} few{# отсутствующих компонента} many {# отсутствующих компонентов}}",
        "content-manager.components.DynamicZone.move-down-label": "Переместить компонент вниз",
        "content-manager.components.DynamicZone.move-up-label": "Переместить компонент вверх",
        "content-manager.components.DynamicZone.pick-compo": "Выберите компонент",
        "content-manager.components.DynamicZone.required": "Обязательный компонент",
        "content-manager.components.EmptyAttributesBlock.button": "Перейти в настройки",
        "content-manager.components.EmptyAttributesBlock.description": "Вы можете изменить текущие настройки",
        "content-manager.components.FieldItem.linkToComponentLayout": "Установить компоновку компонентов",
        "content-manager.components.FieldSelect.label": "Добавить поле",
        "content-manager.components.FilterOptions.button.apply": "Применить",
        "content-manager.components.Filters.usersSelect.label": "Поиск и выбор пользователя для фильтрации по",
        "content-manager.components.FiltersPickWrapper.PluginHeader.actions.apply": "Применить",
        "content-manager.components.FiltersPickWrapper.PluginHeader.actions.clearAll": "Очистить все",
        "content-manager.components.FiltersPickWrapper.PluginHeader.description": "Укажите условия для фильтрации записей",
        "content-manager.components.FiltersPickWrapper.PluginHeader.title.filter": "Фильтры",
        "content-manager.components.FiltersPickWrapper.hide": "Скрыть",
        "content-manager.components.LeftMenu.Search.label": "Поиск по типу содержимого",
        "content-manager.components.LeftMenu.collection-types": "Типы Коллекций",
        "content-manager.components.LeftMenu.single-types": "Одиночные Типы",
        "content-manager.components.LimitSelect.itemsPerPage": "Элементов на странице",
        "content-manager.components.ListViewTable.row-line": "строка {number}",
        "content-manager.components.NotAllowedInput.text": "Нет разрешений на просмотр этого поля",
        "content-manager.components.RelationInput.icon-button-aria-label": "Тяни",
        "content-manager.components.RepeatableComponent.error-message": "Компонент(-ы) содержит(-ат) ошибку(-и)",
        "content-manager.components.Search.placeholder": "Поиск записей...",
        "content-manager.components.Select.draft-info-title": "Состояние: Черновик",
        "content-manager.components.Select.publish-info-title": "Состояние: Опубликовано",
        "content-manager.components.SettingsViewWrapper.pluginHeader.description.edit-settings": "Настройте, как будет выглядеть вид редактирования.",
        "content-manager.components.SettingsViewWrapper.pluginHeader.description.list-settings": "Определите параметры представления списка.",
        "content-manager.components.SettingsViewWrapper.pluginHeader.title": "Настройка представления — {name}",
        "content-manager.components.TableDelete.delete": "Удалить все",
        "content-manager.components.TableDelete.deleteSelected": "Удалить выбранное",
        "content-manager.components.TableDelete.label": "выбрано записей: {number}",
        "content-manager.components.TableEmpty.withFilters": "Нет {contentType} с применёнными фильтрами...",
        "content-manager.components.TableEmpty.withSearch": "Нет {contentType} согласно поиску ({search})...",
        "content-manager.components.TableEmpty.withoutFilter": "Нет {contentType}...",
        "content-manager.components.empty-repeatable": "Ещё нет записей. Нажмите кнопку ниже, чтобы добавить.",
        "content-manager.components.notification.info.maximum-requirement": "Вы уже достигли максимального количества полей",
        "content-manager.components.notification.info.minimum-requirement": "Добавлено поле, соответствующее минимальным требованиям",
        "content-manager.components.repeatable.reorder.error": "Произошла ошибка при изменении порядка полей вашего компонента. Попробуйте ещё раз.",
        "content-manager.components.reset-entry": "Сбросить запись",
        "content-manager.components.uid.apply": "Применить",
        "content-manager.components.uid.available": "Доступный",
        "content-manager.components.uid.regenerate": "Восстановить",
        "content-manager.components.uid.suggested": "Предложенный",
        "content-manager.components.uid.unavailable": "Недоступный",
        "content-manager.containers.Edit.Link.Layout": "Настройка макета",
        "content-manager.containers.Edit.Link.Model": "Измените тип Коллекции",
        "content-manager.containers.Edit.addAnItem": "Добавить элемент...",
        "content-manager.containers.Edit.clickToJump": "Нажмите для перехода к записи",
        "content-manager.containers.Edit.delete": "Удалить",
        "content-manager.containers.Edit.delete-entry": "Удалить эту запись",
        "content-manager.containers.Edit.editing": "Редактирование...",
        "content-manager.containers.Edit.information": "Информация",
        "content-manager.containers.Edit.information.by": "Автор",
        "content-manager.containers.Edit.information.created": "Создано",
        "content-manager.containers.Edit.information.draftVersion": "черновая версия",
        "content-manager.containers.Edit.information.editing": "Редактирование",
        "content-manager.containers.Edit.information.lastUpdate": "Последнее обновление",
        "content-manager.containers.Edit.information.publishedVersion": "опубликованная версия",
        "content-manager.containers.Edit.pluginHeader.title.new": "Создать запись",
        "content-manager.containers.Edit.reset": "Сбросить",
        "content-manager.containers.Edit.returnList": "Вернуться к списку",
        "content-manager.containers.Edit.seeDetails": "Подробнее",
        "content-manager.containers.Edit.submit": "Сохранить",
        "content-manager.containers.EditSettingsView.modal-form.edit-field": "Отредактируйте это поле",
        "content-manager.containers.EditView.add.new-entry": "Добавить запись",
        "content-manager.containers.EditView.notification.errors": "Форма содержит некоторые ошибки",
        "content-manager.containers.Home.introduction": "Для того, чтобы отредактировать ваши записи используйте соответствующую ссылку в меню слева. У плагина отсутствует полноценная возможность редактировать настройки, и он всё ещё находится в стадии активной разработки.",
        "content-manager.containers.Home.pluginHeaderDescription": "Управляйте своими записями с помощью мощного и красивого интерфейса.",
        "content-manager.containers.Home.pluginHeaderTitle": "Редактор контента",
        "content-manager.containers.List.draft": "Черновик",
        "content-manager.containers.List.errorFetchRecords": "Ошибка",
        "content-manager.containers.List.published": "Опубликован",
        "content-manager.containers.list.displayedFields": "Отображаемые поля",
        "content-manager.containers.list.items": "{number, plural, =0{# элементов} one{# элемент} few{# элемента} many {# элементов}}",
        "content-manager.containers.list.selectedEntriesModal.publishedCount": "<b>{publishedCount}</b> {publishedCount, plural, =0{# записей} one{# запись} few{# записи} many {# записей}} опубликованы. <b>{withErrorsCount}</b> {withErrorsCount, plural, =0{# записей} one{# запись} few{# записи} many {# записей}} ожидают действий.",
        "content-manager.containers.list.selectedEntriesModal.selectedCount": "<b>{readyToPublishCount}</b> {readyToPublishCount, plural, =0{# записей} one{# запись} few{# записи} many {# записей}} готовы к публикации. <b>{withErrorsCount}</b> {withErrorsCount, plural, =0{# записей} one{# запись} few{# записи} many {# записей}} ожидают действий.",
        "content-manager.containers.list.selectedEntriesModal.title": "Опубликовать записи",
        "content-manager.containers.list.table-headers.publishedAt": "Состояние",
        "content-manager.containers.ListSettingsView.modal-form.edit-label": "Отредактировать {fieldName}",
        "content-manager.containers.SettingPage.add.field": "Добавить ещё одно поле",
        "content-manager.containers.SettingPage.add.relational-field": "Добавить ещё одно связанное поле",
        "content-manager.containers.SettingPage.attributes": "Поля атрибутов",
        "content-manager.containers.SettingPage.attributes.description": "Определить порядок атрибутов",
        "content-manager.containers.SettingPage.editSettings.description": "Перетащите поля, чтобы определить макет",
        "content-manager.containers.SettingPage.editSettings.entry.title": "Заголовок записи",
        "content-manager.containers.SettingPage.editSettings.entry.title.description": "Установите отображаемое поле вашей записи",
        "content-manager.containers.SettingPage.editSettings.relation-field.description": "Установите поле, которое будет отображаться как в режиме редактирования, так и в списке",
        "content-manager.containers.SettingPage.editSettings.title": "Редактирование — Настройки",
        "content-manager.containers.SettingPage.layout": "Макет",
        "content-manager.containers.SettingPage.listSettings.description": "Настройте параметры для этого типа Коллекции",
        "content-manager.containers.SettingPage.listSettings.title": "Просмотр списка — Настройки",
        "content-manager.containers.SettingPage.pluginHeaderDescription": "Настройте конкретные параметры для этого типа Коллекции",
        "content-manager.containers.SettingPage.relations": "Связанные поля",
        "content-manager.containers.SettingPage.settings": "Настройки",
        "content-manager.containers.SettingPage.view": "Вид",
        "content-manager.containers.SettingViewModel.pluginHeader.title": "Контент менеджер — {name}",
        "content-manager.containers.SettingsPage.Block.contentType.description": "Настроить отдельные параметры",
        "content-manager.containers.SettingsPage.Block.contentType.title": "Типы Коллекций",
        "content-manager.containers.SettingsPage.Block.generalSettings.description": "Настройте параметры по умолчанию для ваших типов Коллекций",
        "content-manager.containers.SettingsPage.Block.generalSettings.title": "Общее",
        "content-manager.containers.SettingsPage.pluginHeaderDescription": "Настройте параметры для всех ваших типов Коллекций и Групп",
        "content-manager.containers.SettingsView.list.subtitle": "Настройте макет и отображение ваших типов Коллекций и и Групп",
        "content-manager.containers.SettingsView.list.title": "Конфигурация отображения",
        "content-manager.dnd.cancel-item": "{item}, перемещён. Изменение порядка не произошло.",
        "content-manager.dnd.drop-item": "{item}, перемещён. Новое местоположение в списке: {position}.",
        "content-manager.dnd.grab-item": "{item}, перемещён. Текущее местоположение в списке: {position}. Нажимайте стрелки вверх и вниз, чтобы изменить положение, пробел, чтобы переместить, Escape, чтобы отменить.",
        "content-manager.dnd.instructions": "Нажмите пробел, чтобы захватить и изменить порядок",
        "content-manager.dnd.reorder": "{item}, перемещён. Новое местоположение в списке: {position}.",
        "content-manager.edit-settings-view.link-to-ctb.components": "Редактировать компонент",
        "content-manager.edit-settings-view.link-to-ctb.content-types": "Редактирование типа содержимого",
        "content-manager.emptyAttributes.button": "Перейдите в конструктор типов Коллекций",
        "content-manager.emptyAttributes.description": "Добавьте своё первое поле в тип Коллекции",
        "content-manager.emptyAttributes.title": "Пока нет полей",
        "content-manager.error.attribute.key.taken": "Это значение уже существует",
        "content-manager.error.attribute.sameKeyAndName": "Не может быть одинаковым",
        "content-manager.error.attribute.taken": "Поле с таким названием уже существует",
        "content-manager.error.contentTypeName.taken": "Это название уже существует",
        "content-manager.error.model.fetch": "Произошла ошибка во время настройки конфигурации модели.",
        "content-manager.error.record.create": "Произошла ошибка при создании записи.",
        "content-manager.error.record.delete": "Произошла ошибка при удалении записи.",
        "content-manager.error.record.fetch": "Произошла ошибка при извлечении записи.",
        "content-manager.error.record.update": "Произошла ошибка при обновлении записи.",
        "content-manager.error.records.count": "Произошла ошибка при подсчёте количества записей.",
        "content-manager.error.records.fetch": "Произошла ошибка при извлечении записей.",
        "content-manager.error.schema.generation": "Возникла ошибка во время генерации структуры.",
        "content-manager.error.validation.json": "Это не JSON",
        "content-manager.error.validation.max": "Слишком большое.",
        "content-manager.error.validation.maxLength": "Слишком длинное.",
        "content-manager.error.validation.min": "Слишком маленькое.",
        "content-manager.error.validation.minLength": "Слишком короткое.",
        "content-manager.error.validation.minSupMax": "Не может быть выше",
        "content-manager.error.validation.regex": "Значение не соответствует регулярному выражению.",
        "content-manager.error.validation.required": "Обязательное значение.",
        "content-manager.form.Input.bulkActions": "Включить массовые действия",
        "content-manager.form.Input.defaultSort": "Сортировка по умолчанию",
        "content-manager.form.Input.description": "Описание",
        "content-manager.form.Input.description.placeholder": "Имя, отображаемое в профиле",
        "content-manager.form.Input.editable": "Редактируемое поле",
        "content-manager.form.Input.filters": "Включить фильтры",
        "content-manager.form.Input.hint.character.unit": "{maxValue, plural, =0{# символов} one{# символ} few{# символа} many {# символов}}",
        "content-manager.form.Input.hint.minMaxDivider": " / ",
        "content-manager.form.Input.hint.text": "{min, select, undefined {} other {мин. {min}}}{divider}{max, select, undefined {} other {макс. {max}}}{unit}{br}{description}",
        "content-manager.form.Input.label": "Подпись",
        "content-manager.form.Input.label.inputDescription": "Это значение переопределяет название, отображаемое в заголовке таблицы",
        "content-manager.form.Input.pageEntries": "Записей на странице",
        "content-manager.form.Input.pageEntries.inputDescription": "Примечание: вы можете переопределить это значение на странице настроек типа Коллекции.",
        "content-manager.form.Input.placeholder": "Заполнитель",
        "content-manager.form.Input.placeholder.placeholder": "Моё значение",
        "content-manager.form.Input.search": "Включить поиск",
        "content-manager.form.Input.search.field": "Включить поиск по этому полю",
        "content-manager.form.Input.sort.field": "Включить сортировку по этому полю",
        "content-manager.form.Input.sort.order": "Сортировка по умолчанию",
        "content-manager.form.Input.wysiwyg": "Отображение в виде WYSIWYG",
        "content-manager.global.displayedFields": "Отображение полей",
        "content-manager.groups": "Группы",
        "content-manager.groups.numbered": "Группы ({number})",
        "content-manager.header.name": "Контент",
        "content-manager.link-to-ctb": "Редактировать модель",
        "content-manager.listView.validation.errors.message": "Пожалуйста, убедитесь перед публикацией, что все поля заполнены правильно (обязательное поле, минимальное/максимальное количество символов и т.д.).",
        "content-manager.listView.validation.errors.title": "Требуется действие",
        "content-manager.models": "Типы Коллекции",
        "content-manager.models.numbered": "Типы Коллекции ({number})",
        "content-manager.notification.error.displayedFields": "Необходимо добавить хотя бы одно поле",
        "content-manager.notification.error.relationship.fetch": "Возникла ошибка при получении связей.",
        "content-manager.notification.info.SettingPage.disableSort": "У вас должен быть один атрибут с разрешенной сортировкой",
        "content-manager.notification.info.minimumFields": "Вам нужно иметь хотя бы одно отображаемое поле",
        "content-manager.notification.upload.error": "Произошла ошибка при загрузке ваших файлов",
        "content-manager.pageNotFound": "Страница не найдена",
        "content-manager.pages.ListView.header-subtitle": "{number, plural, =0 {Ничего не найдено} other {Найдено записей: #}}",
        "content-manager.pages.NoContentType.button": "Создайте свой первый тип контента",
        "content-manager.pages.NoContentType.text": "У вас ещё нет никакого контента, мы рекомендуем вам создать свой первый тип контента.",
        "content-manager.permissions.not-allowed.create": "У вас нет прав на создание документов",
        "content-manager.permissions.not-allowed.update": "У вас нет прав на просмотр этого документа",
        "content-manager.plugin.description.long": "Быстрый способ увидеть, отредактировать и удалить данные в вашей базе данных.",
        "content-manager.plugin.description.short": "Быстрый способ увидеть, отредактировать и удалить данные в вашей базе данных.",
        "content-manager.popUpWarning.bodyMessage.contentType.delete": "Вы уверены, что хотите удалить эту запись?",
        "content-manager.popUpWarning.bodyMessage.contentType.delete.all": "Вы уверены, что хотите удалить эти записи?",
        "content-manager.popUpWarning.bodyMessage.contentType.publish.all": "Are you sure you want to publish these entries?",
        "content-manager.popUpWarning.bodyMessage.contentType.unpublish.all": "Are you sure you want to unpublish these entries?",
        "content-manager.popUpWarning.warning.has-draft-relations.title": "Подтверждение",
        "content-manager.popUpWarning.warning.publish-question": "Вы уверены, что хотите опубликовать запись?",
        "content-manager.popUpWarning.warning.unpublish": "Если вы не опубликуете этот контент, он автоматически превратится в Черновик.",
        "content-manager.popUpWarning.warning.unpublish-question": "Вы уверены, что хотите её не публиковать?",
        "content-manager.popUpWarning.warning.updateAllSettings": "Это изменит все ваши настройки",
        "content-manager.popUpwarning.warning.bulk-has-draft-relations.message": "<b>{count} {count, plural, =0{# отношений} one{# отношение} few{# отношения} many {# отношений}} из {entities} {entities, =0{# записей} one{# записи} few{# записей} many {# записей}}</b> ещё не опубликованы и могут привести к неожиданному поведению.",
        "content-manager.popUpwarning.warning.has-draft-relations.button-confirm": "Да, публиковать",
        "content-manager.popUpwarning.warning.has-draft-relations.message": "<b>{count, plural, =0{# отношений записей} one{# отношение записи} few{# отношения записи} many {# отношений записей}}</b> ещё не опубликованы.<br></br>Это может привести к появлению неработающих ссылок и ошибок в вашем проекте.",
        "content-manager.popover.display-relations.label": "Показать отношения",
        "content-manager.relation.add": "Добавить отношение",
        "content-manager.relation.disconnect": "Удалить",
        "content-manager.relation.isLoading": "Отношения загружаются",
        "content-manager.relation.loadMore": "Загрузить ещё",
        "content-manager.relation.notAvailable": "Нет отношений",
        "content-manager.relation.publicationState.draft": "Черновик",
        "content-manager.relation.publicationState.published": "Опубликовано",
        "content-manager.reviewWorkflows.stage.label": "Просмотреть этап",
        "content-manager.select.currently.selected": "{count} выбрано",
        "content-manager.success.record.delete": "Удалено",
        "content-manager.success.record.publish": "Опубликовано",
        "content-manager.success.record.publishing": "Публикуем...",
        "content-manager.success.record.save": "Сохранено",
        "content-manager.success.record.unpublish": "Не опубликовано",
        "content-manager.utils.data-loaded": "{number, plural, =0{# записей} one{# запись} few{# записи} many {# записей}} успешно загружено",
        "content-manager.actions.delete.label": "Удалить запись",
        "content-manager.actions.discard.label": "Отменить изменения",
        "content-manager.actions.discard.dialog.body": "Вы уверены, что хотите отменить изменения? Это действие необратимо.",
        "content-manager.actions.edit.error": "Произошла ошибка при попытке редактирования документа.",
        "content-manager.actions.edit.label": "Редактировать",
        "content-manager.actions.unpublish.error": "Произошла ошибка при попытке снять публикацию документа.",
        "content-manager.actions.unpublish.dialog.body": "Вы уверены, что хотите снять публикацию?",
        "content-manager.actions.unpublish.dialog.option.keep-draft": "Снять публикацию и сохранить последний черновик",
        "content-manager.actions.unpublish.dialog.option.replace-draft": "Снять публикацию и заменить последний черновик",
        "content-manager.containers.edit.tabs.draft": "черновик",
        "content-manager.containers.edit.tabs.published": "опубликовано",
        "content-manager.containers.edit.information.last-published.label": "Опубликовано",
        "content-manager.containers.edit.information.last-draft.label": "Обновлено",
        "content-manager.containers.edit.information.document.label": "Создано",
        "cloud.plugin.name": "Развертывание",
        "cloud.Homepage.title": "Полностью управляемый облачный хостинг для вашего проекта на Strapi",
        "cloud.Homepage.subTitle": "Следуйте этому процессу из 2 шагов, чтобы получить все необходимое для работы Strapi в продакшн.",
        "cloud.Homepage.githubBox.title.versioned": "Проект загружен на GitHub",
        "cloud.Homepage.githubBox.title.not-versioned": "Загрузите ваш проект на GitHub",
        "cloud.Homepage.githubBox.subTitle.versioned": "Вы это сделали! Вы на шаг ближе к размещению вашего проекта в сети.",
        "cloud.Homepage.githubBox.subTitle.not-versioned": "Ваш проект должен быть версионирован на GitHub перед развертыванием на Strapi Cloud.",
        "cloud.Homepage.githubBox.buttonText": "Загрузить на GitHub",
        "cloud.Homepage.cloudBox.title": "Развернуть в Strapi Cloud",
        "cloud.Homepage.cloudBox.subTitle": "Наслаждайтесь стеком, оптимизированным для Strapi, включая базу данных, почтовый провайдер и CDN.",
        "cloud.Homepage.cloudBox.buttonText": "Развернуть в Strapi Cloud",
        "cloud.Homepage.textBox.label.versioned": "Попробуйте Strapi Cloud бесплатно!",
        "cloud.Homepage.textBox.label.not-versioned": "Почему я должен загружать мой проект на GitHub?",
        "cloud.Homepage.textBox.text.versioned": "Strapi Cloud предлагает 14-дневный бесплатный пробный период, чтобы вы могли поэкспериментировать с вашим проектом в облаке, включая все функции.",
        "cloud.Homepage.textBox.text.not-versioned": "Strapi Cloud будет извлекать и развертывать ваш проект из вашего репозитория на GitHub. Это лучший способ версионировать, управлять и развертывать ваш проект. Следуйте инструкциям на GitHub, чтобы успешно загрузить его.",
        "global.home": "Главная страница",
        "upload.apiError.FileTooBig": "Загружаемый файл превышает максимальный допустимый размер.",
        "upload.upload.generic-error": "Произошла ошибка при загрузке файла.",
        "upload.bulk.select.label": "Выбрать все ресурсы",
        "upload.content.isLoading": "Контент загружается.",
        "upload.control-card.stop-crop": "Остановить обрезку",
        "upload.header.actions.add-assets": "Добавить новые ресурсы",
        "upload.header.actions.add-folder": "Добавить новую папку",
        "upload.header.actions.add-assets.folder": "папка",
        "upload.header.actions.upload-new-asset": "Загрузить новый ресурс",
        "upload.header.content.assets-empty": "Нет ресурсов",
        "upload.input.label": "Перетащите сюда или",
        "upload.input.placeholder.icon": "Перетащите ресурс в эту зону",
        "upload.input.notification.not-supported": "Вы не можете загрузить этот тип файла, принимаются только следующие типы – {fileTypes}",
        "upload.list.assets.title": "Ресурсы ({count})",
        "upload.list.asset.at.finished": "Загрузка ресурсов завершена.",
        "upload.list.assets-empty.search": "Результатов не найдено",
        "upload.list.assets.empty": "Медиа-библиотека пуста",
        "upload.list.assets.empty-upload": "Загрузите ваши первые ресурсы...",
        "upload.list.assets.empty.no-permissions": "Нет прав для просмотра",
        "upload.list.assets.loading-asset": "Загрузка превью для медиа: {path}",
        "upload.list.assets.not-supported-content": "Нет доступного превью",
        "upload.list.assets.preview-asset": "Предпросмотр видео по пути {path}",
        "upload.list.assets.selected": "{numberFolders, plural, one {1 папка} other {# папок}} - {numberAssets, plural, one {1 ресурс} other {# ресурсов}}",
        "upload.list-assets-select": "Выбрать ресурс {name}",
        "upload.list.assets.to-upload": "{number, plural, =0 {Нет ресурсов} one {1 ресурс} other {# ресурсов}} готово к загрузке",
        "upload.list.folder.edit": "Редактировать папку",
        "upload.list.folder.select": "Выбрать папку {name}",
        "upload.list.folder.subtitle": "{folderCount, plural, =0 {# папка} one {# папка} other {# папок}}, {filesCount, plural, =0 {# ресурс} one {# ресурс} other {# ресурсов}}",
        "upload.list.folders.title": "Папки ({count})",
        "upload.list.folders.link-label": "Перейти в папку",
        "upload.mediaLibraryInput.actions.nextSlide": "Следующий слайд",
        "upload.mediaLibraryInput.actions.previousSlide": "Предыдущий слайд",
        "upload.mediaLibraryInput.placeholder": "Нажмите, чтобы добавить ресурс или перетащите его в эту область",
        "upload.mediaLibraryInput.slideCount": "{n} из {m} слайдов",
        "upload.modal.file-details.id": "ID ресурса",
        "upload.modal.folder.elements.count": "{folderCount} папок, {assetCount} ресурсов",
        "upload.modal.header.go-back": "Назад",
        "upload.modal.folder.move.title": "Переместить элементы в",
        "upload.modal.remove.success-label": "Элементы успешно удалены.",
        "upload.modal.move.success-label": "Элементы успешно перемещены",
        "upload.modal.selected-list.sub-header-subtitle": "Перетащите, чтобы изменить порядок ресурсов в поле",
        "upload.modal.upload-list.footer.button": "Загрузить {number, plural, one {# ресурс} other {# ресурсов}} в библиотеку",
        "upload.page.title": "Настройки - Медиа-библиотека",
        "upload.permissions.not-allowed.update": "У вас нет прав для редактирования этого файла.",
        "upload.search.clear.label": "Очистить поиск",
        "upload.search.label": "Поиск ресурса",
        "upload.settings.form.sizeOptimization.description": "Включение этой опции уменьшит размер изображения и немного снизит его качество.",
        "upload.settings.section.doc.label": "Документ",
        "upload.list.table.header.actions": "действия",
        "upload.list.table.header.preview": "предпросмотр",
        "upload.list.table.header.name": "имя",
        "upload.list.table.header.ext": "расширение",
        "upload.list.table.header.size": "размер",
        "upload.list.table.header.createdAt": "создано",
        "upload.list.table.header.updatedAt": "последнее обновление",
        "upload.list.table.header.sort": "Сортировать по {label}",
        "upload.list.table.content.empty-label": "Это поле пусто",
        "upload.tabs.title": "Как вы хотите загрузить ваши ресурсы?",
        "upload.config.back": "Назад",
        "upload.config.subtitle": "Определите настройки просмотра медиа-библиотеки.",
        "upload.config.entries.title": "Записи на странице",
        "upload.config.sort.title": "Порядок сортировки по умолчанию",
        "upload.config.entries.note": "Количество ресурсов, отображаемых по умолчанию в медиа-библиотеке",
        "upload.config.note": "Примечание: вы можете переопределить это значение в медиа-библиотеке.",
        "upload.config.popUpWarning.warning.updateAllSettings": "Это изменит все ваши настройки",
        "upload.view-switch.list": "Список",
        "upload.view-switch.grid": "Сетка",
      }
    },
    tutorials: false,
    notifications: { releases: false },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
